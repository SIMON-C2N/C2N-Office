package in.c2n.portal.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import in.c2n.portal.service.CourseService;

@RestController("courses")
@CrossOrigin
public class CourseResource {
	
	@Autowired
	private CourseService courseService;
	
	
}
