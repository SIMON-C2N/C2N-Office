package in.c2n.portal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import in.c2n.portal.entities.Employee;
import in.c2n.portal.repositories.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	public ResponseEntity<List<Employee>> findAll() {
		return new ResponseEntity<List<Employee>>(employeeRepository.findAll(), HttpStatus.OK);
	}
}