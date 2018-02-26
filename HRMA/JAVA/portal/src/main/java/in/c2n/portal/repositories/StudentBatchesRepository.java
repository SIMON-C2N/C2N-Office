package in.c2n.portal.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.c2n.portal.entities.StudentBatches;

@Repository
public interface StudentBatchesRepository extends JpaRepository<StudentBatches, Integer> {

	List<StudentBatches> findAllByStudentId(final Integer studentId);
}
