package com.doubletex.app.errors;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.time.LocalDateTime;

@Getter
@RequiredArgsConstructor
@ResponseStatus(HttpStatus.NOT_FOUND)
@JsonIgnoreProperties({"supressed", "cause", "stackTrace", "localizedMessage", "message"})
public class DbtNotFound extends RuntimeException{

    private final int httpCode = HttpStatus.NOT_FOUND.value();
    private Class<?> entityClass;
    private Long id;
    private final LocalDateTime time = LocalDateTime.now();

    @Override
    public String getMessage(){
        return "An entity of type " + entityClass.getSimpleName() + " with id: " + id + " was not found.";
    }
}
