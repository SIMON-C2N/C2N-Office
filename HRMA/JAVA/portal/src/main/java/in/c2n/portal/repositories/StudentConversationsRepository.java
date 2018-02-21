package in.c2n.portal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.c2n.portal.entities.StudentConversations;

@Repository
public interface StudentConversationsRepository extends JpaRepository<StudentConversations, Integer> {

}