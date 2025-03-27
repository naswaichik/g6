package nakhov.crafted.bear.services;

import java.util.List;
import java.util.Optional;
import nakhov.crafted.bear.models.Bear;
import nakhov.crafted.bear.repositories.BearRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class BearService {

  private final BearRepository bearRepository;

  public BearService(BearRepository bearRepository) {
    this.bearRepository = bearRepository;
  }

  public Optional<Bear> getBearById(int id) {
    return bearRepository.findById(id);
  }

  public List<Bear> getAllBears() {
    return bearRepository.findAll();
  }
}
