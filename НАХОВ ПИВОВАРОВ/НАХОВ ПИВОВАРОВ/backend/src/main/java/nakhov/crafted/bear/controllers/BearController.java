package nakhov.crafted.bear.controllers;

import java.util.List;
import nakhov.crafted.bear.models.Bear;
import nakhov.crafted.bear.services.BearService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/bear")
public class BearController {

  private final BearService bearService;

  public BearController(BearService bearService) {
    this.bearService = bearService;
  }

  @GetMapping
  public List<Bear> getBears() {
    return bearService.getAllBears();
  }
}
