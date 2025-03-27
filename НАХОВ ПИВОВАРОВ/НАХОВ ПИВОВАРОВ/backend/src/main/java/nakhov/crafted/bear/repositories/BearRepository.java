package nakhov.crafted.bear.repositories;

import nakhov.crafted.bear.models.Bear;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BearRepository extends JpaRepository<Bear, Integer> {
}
