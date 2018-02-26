package in.c2n.portal.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.c2n.portal.entities.Student;
import in.c2n.portal.entities.StudentBatch;
import in.c2n.portal.entities.StudentBatches;
import in.c2n.portal.entities.StudentsByReferrer;
import in.c2n.portal.service.StudentService;
import in.c2n.portal.vo.StudentConversation_VO;

@CrossOrigin
@RestController
@RequestMapping("students")
public class StudentResource {

	@Autowired
	private StudentService studentService;

	@GetMapping
	public ResponseEntity<List<StudentsByReferrer>> findAll(@PageableDefault(size=50) Pageable pageable) {
		return studentService.findAll(pageable);
	}

	@PostMapping
	public void saveNewEnquiry(@RequestBody(required = true) final Student student) {
		studentService.saveNewEnquiry(student);
	}

	@PutMapping("add_batch")
	public void assignNewBatchToStudent(@RequestBody(required = true) final StudentBatch studentBatch) {
		studentService.assignNewBatchToStudent(studentBatch);
	}

	@PutMapping("update_conversation")
	public void updateConversation(@RequestBody(required = true) final StudentConversation_VO studentConversation) {
		studentService.updateConversation(studentConversation);
	}

	@GetMapping("findAllBatches/{id}")
	public ResponseEntity<List<StudentBatches>> findAllBatchesByStudentId(
			@PathVariable(name = "id", required = true) final Integer studentId) {
		return studentService.findAllBatchesByStudentId(studentId);
	}

	@GetMapping("findAllConversations/{id}")
	public ResponseEntity<List<String>> findAllConversationsByStudentId(
			@PathVariable(name = "id", required = true) final Integer studentId) {
		return studentService.findAllConversationsByStudentId(studentId);
	}

	@GetMapping("searchAll/{keyword}")
	public ResponseEntity<List<StudentsByReferrer>> searchAllByKeyword(
			@PathVariable(name = "keyword", required = true) final String keyword) {
		return studentService.searchAllByKeyword(keyword);
	}
}