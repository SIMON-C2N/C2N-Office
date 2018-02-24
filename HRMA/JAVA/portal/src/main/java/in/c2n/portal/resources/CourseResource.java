package in.c2n.portal.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import in.c2n.portal.entities.BatchesYetToStart;
import in.c2n.portal.service.CourseService;

@CrossOrigin
@RestController
@RequestMapping("courses")
public class CourseResource {

	@Autowired
	private CourseService courseService;

	@GetMapping("/upcoming")
	public ResponseEntity<List<BatchesYetToStart>> findAllBatchesOfNotYetCompleted(
			@RequestParam(name = "studentId", required = true) final String studentId) {
		return courseService.findAllBatchesOfNotYetCompleted(studentId);
	}
}
