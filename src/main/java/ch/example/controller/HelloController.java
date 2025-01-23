package ch.example.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@Value("${app.greeter:Letsboot}")
	private String greeter;

	@GetMapping("/hello")
	public String index() {
		return "Greetings from " + greeter + "!";
	}

	@GetMapping("/status")
	public String status() {
		return "up";
	}

	@GetMapping("/feature")
	public String feature() {
		return "see my new message";
	}
}