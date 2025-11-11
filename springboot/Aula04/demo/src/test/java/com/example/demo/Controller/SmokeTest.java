package com.example.demo.Controller;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SmokeTest {

	@Autowired
	private HomeController controller;

	@Test
	void contextLoads() throws Exception {
		assertThat(controller).isNotNull();
	}

    @Test
    @Disabled("This test is disabled to demonstrate a failing test")
    void fakeContextLoad() {
        assertThat(controller).isNull();
        
    }
}