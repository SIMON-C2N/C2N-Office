package in.c2n.portal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import in.c2n.portal.entities.BatchesYetToStart;
import in.c2n.portal.repositories.BatchesYetToStartRepository;

@Service
public class CourseService {

	@Autowired
	private BatchesYetToStartRepository batchesYetToStartRepository;

	public ResponseEntity<List<BatchesYetToStart>> findAllBatchesOfNotYetCompleted(final String studentId) {
		return new ResponseEntity<List<BatchesYetToStart>>(batchesYetToStartRepository.findAllByStudentId(studentId), HttpStatus.OK);
	}

}