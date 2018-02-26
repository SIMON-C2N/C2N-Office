package in.c2n.portal.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import in.c2n.portal.entities.StudentsByReferrer;

@Repository
public interface StudentsByReferrerRepository extends JpaRepository<StudentsByReferrer, Integer> {

	@Query(nativeQuery = true, value = "select * from students_by_referrer where first_name like :keyword or last_name like :keyword or email_id like :keyword or mobile_no like :keyword")
	List<StudentsByReferrer> searchAll(@Param("keyword") final String keyword);
}