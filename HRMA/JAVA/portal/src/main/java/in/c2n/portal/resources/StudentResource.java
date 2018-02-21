package in.c2n.portal.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.c2n.portal.entities.StudentsByReferrer;
import in.c2n.portal.service.StudentService;

@CrossOrigin
@RestController
@RequestMapping("students")
public class StudentResource {

	@Autowired
	private StudentService studentService;

	@GetMapping
	public ResponseEntity<List<StudentsByReferrer>> findAll() {
		return studentService.findAll();
	}
}