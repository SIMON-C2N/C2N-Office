package in.c2n.portal.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import in.c2n.portal.entities.StudentsByReferrer;
import in.c2n.portal.repositories.StudentsByReferrerRepository;

@Service
public class StudentService {

	@Autowired
	private StudentsByReferrerRepository studentsByReferrerRepository;

	public ResponseEntity<List<StudentsByReferrer>> findAll() {
		ResponseEntity<List<StudentsByReferrer>> response = null;
		final List<StudentsByReferrer> students = studentsByReferrerRepository.findAll();
		if ((Objects.nonNull(students))) {
			response = new ResponseEntity<List<StudentsByReferrer>>(students, HttpStatus.OK);
		}
		return response;
	}
}