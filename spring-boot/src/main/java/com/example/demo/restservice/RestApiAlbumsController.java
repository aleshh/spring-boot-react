package com.example.demo.restservice;

import java.util.List;
import java.util.ArrayList;
import java.util.Base64;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class RestApiAlbumsController {
  	private List<Album>albums = new ArrayList<>();

		public static final Logger log = LoggerFactory.getLogger(RestApiAlbumsController.class);

		public RestApiAlbumsController() {
			albums.addAll(List.of(
				new Album("Olé Coltrane", "John Coltrane"),
				new Album("The Madcap Laughs", "Syd Barrett"),
				new Album("What's Going On", "Marvin Gaye"),
				new Album("Golden Hour", "Kacey Musgraves"),
				new Album("Shoot Out the Lights", "Richard & Linda Thompson"),
				new Album("Back Up Train", "Al Green"),
				new Album("Tell Mama", "Etta James"),
				new Album("Walkin'", "Miles Davis"),
				new Album("Gamelan Music of Bali", "Field Musicians"),
				new Album("Live in Cologne, 1954", "Billie Holiday")
			));

			String credentials = "1cfa6ce8b419425a96f36ad11f6b9133:2f941c0d4bcb4341affa0236bf2ece2b";
			String encodedCredentials = Base64.getEncoder().encodeToString(credentials.getBytes());
		}

		@GetMapping(value = "/albums")
		Iterable<Album> getAlbums() {
			return albums;
		}

		@PostMapping(value = "/albums")
		Iterable<Album> newAlbum(@RequestBody Album album) {
			System.out.println("····························································");
			System.out.println(album);

			return albums;
		}

}
