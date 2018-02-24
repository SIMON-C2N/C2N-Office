package in.c2n.portal.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import in.c2n.portal.entities.BatchesYetToStart;

@Repository
public interface BatchesYetToStartRepository extends JpaRepository<BatchesYetToStart, Integer> {

	@Query(nativeQuery = true, value = "SELECT `cb`.`id` AS `batch_id`, UPPER(CONCAT(`c`.`course_name`,'-',`cb`.`start_date`,'-',`cb`.`timings`)) AS `batch`\r\n"
			+ "FROM `course_batch` as `cb` JOIN `course` as `c` ON ((`cb`.`course_id` = `c`.`course_id`)) WHERE cb.id NOT IN (SELECT batch_id FROM `student_batch` WHERE student_id=:studentId) AND (`cb`.`isCompleted` = 0)")
	List<BatchesYetToStart> findAllByStudentId(@Param("studentId") String studentId);

}
