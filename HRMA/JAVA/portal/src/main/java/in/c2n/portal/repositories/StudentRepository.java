package in.c2n.portal.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.c2n.portal.entities.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
}