package com.example.demo.restservice;

import java.util.UUID;

public class Album {
  public final String id;
  public String name;
  public String artist;

  public Album(String id, String name, String artist) {
    this.id = id;
    this.name = name;
    this.artist = artist;
  }

  public Album(String name, String artist) {
    this(UUID.randomUUID().toString(), name, artist);
  }

  public String getId() {
    return this.id;
  }

  public String getName() {
    return this.name;
  }

  public String getArtist() {
    return this.artist;
  }
}
