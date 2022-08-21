package com.example.demo.restservice;

import java.util.List;
import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
public class RestApiAlbumsController {
  	private List<Album>albums = new ArrayList<>();

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
		}

		@GetMapping(value = "/albums")
		Iterable<Album> getAlbums() {
			return albums;
		}

}
