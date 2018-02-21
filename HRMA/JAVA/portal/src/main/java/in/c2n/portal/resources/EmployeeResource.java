package in.c2n.portal.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import in.c2n.portal.service.EmployeeService;

@RestController("employees")
@CrossOrigin
public class EmployeeResource {
	@Autowired
	private EmployeeService employeeService;
}