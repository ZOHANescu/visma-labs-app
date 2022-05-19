package com.doubletex.app.errors;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.time.LocalDateTime;

@Getter
@ResponseStatus(HttpStatus.NOT_FOUND)
@JsonIgnoreProperties({"suppressed", "cause", "stackTrace", "localizedMessage"})
public class DbtNotFound extends RuntimeException{

    private final int httpCode = HttpStatus.NOT_FOUND.value();
    private Class<?> entityClass;
    private Long id;
    private final LocalDateTime time = LocalDateTime.now();

    public DbtNotFound(Class<?> entityClass ,Long id){
        this.entityClass = entityClass;
        this.id = id;
    }

    @Override
    public String getMessage(){
        return "An entity of type " + entityClass.getSimpleName() + " with id " + id + " was not found.";
    }
}
