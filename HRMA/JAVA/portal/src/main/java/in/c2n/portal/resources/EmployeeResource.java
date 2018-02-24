package in.c2n.portal.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import in.c2n.portal.entities.Employee;
import in.c2n.portal.service.EmployeeService;

@RestController("employees")
@CrossOrigin
public class EmployeeResource {
	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping
	public ResponseEntity<List<Employee>> findAll(){
		return employeeService.findAll();
	}
}