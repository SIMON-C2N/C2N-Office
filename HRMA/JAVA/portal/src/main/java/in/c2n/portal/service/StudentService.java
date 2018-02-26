package in.c2n.portal.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import in.c2n.portal.entities.Student;
import in.c2n.portal.entities.StudentBatch;
import in.c2n.portal.entities.StudentBatches;
import in.c2n.portal.entities.StudentConversations;
import in.c2n.portal.entities.StudentsByReferrer;
import in.c2n.portal.repositories.StudentBatchRepository;
import in.c2n.portal.repositories.StudentBatchesRepository;
import in.c2n.portal.repositories.StudentConversationsRepository;
import in.c2n.portal.repositories.StudentRepository;
import in.c2n.portal.repositories.StudentsByReferrerRepository;
import in.c2n.portal.vo.StudentConversation_VO;

@Service
public class StudentService {

	@Autowired
	private StudentsByReferrerRepository studentsByReferrerRepository;

	@Autowired
	private StudentBatchRepository studentBatchRepository;

	@Autowired
	private StudentConversationsRepository studentConversationsRepository;

	@Autowired
	private StudentRepository studentRepository;

	@Autowired
	private StudentBatchesRepository studentBatchesRepository;

	public ResponseEntity findAll(final Pageable pageable) {
		ResponseEntity response = null;
		final Page<StudentsByReferrer> students = studentsByReferrerRepository.findAll(pageable);
		if ((Objects.nonNull(students))) {
			response = new ResponseEntity(students, HttpStatus.OK);
		}
		return response;
	}

	public void saveNewEnquiry(final Student student) {
		studentRepository.saveAndFlush(student);
	}

	public void assignNewBatchToStudent(final StudentBatch studentBatch) {
		studentBatchRepository.saveAndFlush(studentBatch);
	}

	public void updateConversation(final StudentConversation_VO studentConversation) {
		final StudentConversations conversations = new StudentConversations();
		conversations.setStudentId(studentConversation.getStudentId());
		conversations.setConversation(studentConversation.getConversation());

		if (Objects.nonNull(studentConversation.getPostdate())) {
			conversations.setPostdate(studentConversation.getPostdate());
		}

		studentConversationsRepository.saveAndFlush(conversations);

		if ((Objects.nonNull(studentConversation.getIsLead())) && (studentConversation.getIsLead())) {
			final Student student = studentRepository.findOne(studentConversation.getStudentId());
			student.setIsLead(((studentConversation.getIsLead()) ? new Byte("1") : new Byte("0")));

			studentRepository.saveAndFlush(student);
		}
	}

	public ResponseEntity<List<StudentBatches>> findAllBatchesByStudentId(final Integer studentId) {
		return new ResponseEntity<List<StudentBatches>>(studentBatchesRepository.findAllByStudentId(studentId),
				HttpStatus.OK);
	}

	public ResponseEntity<List<String>> findAllConversationsByStudentId(final Integer studentId) {
		return new ResponseEntity<List<String>>(
				studentConversationsRepository.findAllConversationsByStudentId(studentId), HttpStatus.OK);
	}

	public ResponseEntity<List<StudentsByReferrer>> searchAllByKeyword(final String keyword) {
		ResponseEntity<List<StudentsByReferrer>> response = null;
		final List<StudentsByReferrer> students = studentsByReferrerRepository.searchAll("%" + keyword + "%");
		if ((Objects.nonNull(students))) {
			response = new ResponseEntity<List<StudentsByReferrer>>(students, HttpStatus.OK);
		}
		return response;
	}
}