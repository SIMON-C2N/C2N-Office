package in.c2n.portal.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import in.c2n.portal.entities.StudentConversations;

@Repository
public interface StudentConversationsRepository extends JpaRepository<StudentConversations, Integer> {

	@Query("SELECT conversation FROM StudentConversations WHERE studentId=:studentId")
	List<String> findAllConversationsByStudentId(@Param("studentId") final Integer studentId);
}