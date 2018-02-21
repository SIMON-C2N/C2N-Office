package in.c2n.portal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.c2n.portal.entities.CourseBatch;

@Repository
public interface CourseBatchRepository extends JpaRepository<CourseBatch, Integer> {

}