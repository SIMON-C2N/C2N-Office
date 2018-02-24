package in.c2n.portal.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import in.c2n.portal.entities.Student;
import in.c2n.portal.entities.StudentBatch;
import in.c2n.portal.entities.StudentsByReferrer;
import in.c2n.portal.repositories.StudentBatchRepository;
import in.c2n.portal.repositories.StudentRepository;
import in.c2n.portal.repositories.StudentsByReferrerRepository;

@Service
public class StudentService {

	@Autowired
	private StudentsByReferrerRepository studentsByReferrerRepository;
	
	@Autowired
	private StudentBatchRepository studentBatchRepository;

	@Autowired
	private StudentRepository studentRepository;
	
	public ResponseEntity<List<StudentsByReferrer>> findAll() {
		ResponseEntity<List<StudentsByReferrer>> response = null;
		final List<StudentsByReferrer> students = studentsByReferrerRepository.findAll();
		if ((Objects.nonNull(students))) {
			response = new ResponseEntity<List<StudentsByReferrer>>(students, HttpStatus.OK);
		}
		return response;
	}
	
	public void saveNewEnquiry(final Student student) {
		studentRepository.saveAndFlush(student);
	}
	
	public void assignNewBatchToStudent(final StudentBatch studentBatch) {
		studentBatchRepository.saveAndFlush(studentBatch);
	}
	
	public void updateConversation() {
		
	}
}