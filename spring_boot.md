# Spring Boot Interview Questions and Answers

---

## Q1. What is an IoC (Inversion of Control) Container? What are Beans?

### Answer
The **IoC Container** is the core component of the Spring Framework responsible for creating, configuring, and managing application objects called **Beans**.

- IoC stands for **Inversion of Control**.
- Instead of creating objects using the `new` keyword, Spring creates and manages them.
- These objects are stored inside the **ApplicationContext** (IoC Container).
- Any managed bean can be injected and reused throughout the application.

---

## Q2. What is `@Autowired`?

### Answer
`@Autowired` is used for **Dependency Injection**.

- Automatically injects the required bean from the IoC container.
- Spring searches for the matching bean by type.
- The same bean instance can be injected into multiple classes.

### Example

```java
@Service
public class UserService {

    @Autowired
    private UserRepository repository;
}
```

### Best Practice

Prefer **Constructor Injection** over Field Injection.

---

## Q3. What is the difference between `@Component` and `@Bean`?

| @Component | @Bean |
|------------|--------|
| Applied on a class | Applied on a method |
| Automatically detected by Component Scan | Declared manually in a Configuration class |
| Used for classes you own | Used for third-party classes |

### Example

```java
@Component
public class EmailService {
}
```

```java
@Configuration
public class AppConfig {

    @Bean
    public ObjectMapper objectMapper() {
        return new ObjectMapper();
    }
}
```

---

## Q4. What are the differences between Spring and Spring Boot?

### Answer

Spring Boot provides:

- Auto Configuration
- Embedded Tomcat Server
- Starter Dependencies
- Reduced XML Configuration
- Production-ready features like Actuator

---

## Q5. Which annotations are included in `@SpringBootApplication`?

### Answer

`@SpringBootApplication` combines:

```java
@Configuration
@EnableAutoConfiguration
@ComponentScan
```

> It does **not** include `@Component`.

---

## Q6. What is the purpose of `@EnableAutoConfiguration`?

### Answer

It automatically configures Spring beans based on the dependencies available in the classpath.

### Examples

- If MySQL dependency is added, Spring automatically creates the `DataSource` bean.
- If Spring MVC dependency is present, `DispatcherServlet` is configured automatically.

---

## Q7. What is the purpose of `@ComponentScan`?

### Answer

`@ComponentScan` scans packages for Spring-managed classes like:

- `@Component`
- `@Service`
- `@Repository`
- `@Controller`
- `@RestController`

It registers them as beans in the IoC container.

---

## Q8. What is the purpose of `@Configuration`?

### Answer

`@Configuration` marks a class as a Spring Configuration class.

It allows defining beans using `@Bean`.

### Example

```java
@Configuration
public class AppConfig {

    @Bean
    public Student student() {
        return new Student();
    }
}
```

---

## Q9. Explain `@Entity`, `@Table`, `@Id`, and `@Column`.

### Answer

| Annotation | Purpose |
|------------|----------|
| `@Entity` | Maps a Java class to a database table |
| `@Table` | Specifies the table name |
| `@Id` | Marks the Primary Key |
| `@Column` | Maps a Java field to a database column |

### Note

`@Column` is optional if the Java field name matches the database column name.

---

## Q10. What is DispatcherServlet?

### Answer

`DispatcherServlet` is the **Front Controller** of Spring MVC.

### Responsibilities

- Receives every HTTP request
- Finds the correct controller
- Invokes the controller method
- Returns the response to the client

It acts as the **traffic controller** of a Spring Boot application.

---

## Q11. Which components work with DispatcherServlet?

### Answer

DispatcherServlet works with:

| Component | Purpose |
|------------|---------|
| HandlerMapping | Maps URLs to controller methods |
| ViewResolver | Resolves views (JSP/HTML) |
| MultipartResolver | Handles file uploads |
| LocaleResolver | Resolves language and region |

---

## Q12. What is the difference between `@Controller` and `@RestController`?

### Answer

`@RestController` is a combination of:

```java
@Controller
@ResponseBody
```

### @Controller

Returns a View.

```java
return "home";
```

### @RestController

Returns JSON/XML directly.

```java
return student;
```

---

## Q13. What are Bean Scopes?

### Answer

Bean Scope determines:

- Bean lifecycle
- Number of instances
- Creation time

### Common Scopes

| Scope | Description |
|---------|-------------|
| Singleton | One instance per Spring Container (Default) |
| Prototype | New instance every time requested |
| Request | One bean per HTTP request |
| Session | One bean per HTTP session |

---

## Q14. Where are application properties defined?

### Answer

Spring Boot supports:

- `application.properties`
- `application.yml`

These files contain:

- Database configuration
- Server port
- Profiles
- Logging
- Custom properties

---

## Q15. Match the annotations with their dependencies

| Annotation | Dependency |
|------------|------------|
| `@Component` | spring-boot-starter-web |
| `@Service` | spring-boot-starter-web |
| `@Autowired` | spring-boot-starter-web |
| `@SpringBootApplication` | spring-boot-starter |
| `@Entity` | spring-boot-starter-data-jpa |
| `@Id` | spring-boot-starter-data-jpa |
| `@Data` | Lombok |
| `@Getter` | Lombok |

---

## Q16. What is Spring Boot Actuator?

### Answer

Spring Boot **Actuator** provides **production-ready monitoring and management** features for Spring Boot applications.

It exposes endpoints to monitor:

- Application Health (`/actuator/health`)
- Metrics (`/actuator/metrics`)
- Environment (`/actuator/env`)
- Beans (`/actuator/beans`)
- Thread Information
- CPU Usage

### Dependency

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

---

## Q17. Which property is used to change the default port?

### Answer

```properties
server.port=9090
```

**Default Port:** `8080`

---

## Q18. What is the purpose of Spring Profiles?

### Answer

Spring Profiles allow different configurations for different environments.

### Common Profiles

- Development (`dev`)
- Testing (`test`)
- Staging (`staging`)
- Production (`prod`)

---

## Q19. Which property activates a Spring Profile?

### Answer

```properties
spring.profiles.active=dev
```

---

## Q20. Can Spring Boot connect to multiple databases?

### Answer

**Yes.**

To configure multiple databases, define:

- Multiple `DataSource` configurations
- Multiple `EntityManagerFactory`
- Multiple `TransactionManager`
- Separate Repository packages

---

## Q21. What is Spring Boot's default embedded server?

### Answer

**Default Embedded Server:** **Tomcat**

Other supported embedded servers:

- Jetty
- Undertow

---

## Q22. What is Context Path?

### Answer

The **Context Path** is the base URL of the application.

### Example

```properties
server.servlet.context-path=/api
```

API URL:

```
http://localhost:8080/api/users
```

---

## Q23. Can Auto Configuration be disabled?

### Answer

Yes.

```java
@SpringBootApplication(
    exclude = DataSourceAutoConfiguration.class
)
```

---

## Q24. What is the default serialization format in Spring Boot?

### Answer

The default serialization format is **JSON**.

Spring Boot uses the **Jackson** library by default for JSON serialization and deserialization.

---

## Q25. Which is the default JPA implementation?

### Answer

**Hibernate**

Spring Boot automatically configures Hibernate when the `spring-boot-starter-data-jpa` dependency is included.

---

## Q26. What does `@GeneratedValue` do?

### Answer

`@GeneratedValue` defines how the **Primary Key** is generated.

### Example

```java
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
```

### Generation Strategies

- `AUTO`
- `IDENTITY`
- `SEQUENCE`
- `TABLE`

---

## Q27. What is the relationship between JPA and Spring Data JPA?

### Answer

- **JPA** is a **Specification**.
- **Hibernate** is a **JPA Implementation**.
- **Spring Data JPA** sits on top of JPA and reduces boilerplate code.

### Flow

```
Application
      ↓
Spring Data JPA
      ↓
Hibernate
      ↓
Database
```

---

## Q28. Difference between `JpaRepository` and `EntityManager`

| JpaRepository | EntityManager |
|---------------|---------------|
| Higher-level abstraction | Low-level JPA API |
| Less code | More control |
| Built-in CRUD methods | Manual CRUD operations |

---

## Q29. Why is Lombok used?

### Answer

Lombok reduces boilerplate code by generating:

- Getters
- Setters
- Constructors
- `equals()`
- `hashCode()`
- `toString()`

These methods are generated automatically during compilation.

---

## Q30. Which Lombok annotation generates getters and setters?

### Answer

`@Data`

`@Data` includes:

- `@Getter`
- `@Setter`
- `@ToString`
- `@EqualsAndHashCode`
- `@RequiredArgsConstructor`

---

## Q31. What is the correct syntax of `@Value`?

### Answer

```java
@Value("${server.port}")
private String port;
```

> **Note:** `${}` is mandatory.

---

## Q32. Difference between `@Value` and `@ConfigurationProperties`

| @Value | @ConfigurationProperties |
|---------|--------------------------|
| Reads a single property | Reads a group of related properties |
| Best for small configurations | Best for large configurations |
| Simple | Cleaner and maintainable |

---

## Q33. Why is Pagination used?

### Answer

Pagination retrieves data **page by page** instead of loading the entire dataset.

### Benefits

- Better Performance
- Lower Memory Usage
- Faster APIs
- Improved User Experience

---

## Q34. Which interface is used for Pagination?

### Answer

`Pageable`

### Example

```java
Page<User> findAll(Pageable pageable);
```

---

## Q35. Which class is used for Sorting?

### Answer

`Sort`

### Example

```java
Sort.by("name").ascending();
```

---

## Q36. Difference between Filter and Interceptor

| Filter | Interceptor |
|---------|-------------|
| Part of Servlet API | Part of Spring MVC |
| Executes before `DispatcherServlet` | Executes before/after Controller |
| Used for Logging, Authentication, Compression | Used for Business Logic, Authorization, Performance Monitoring |

---

## Q37. Which interceptor method executes before the Controller?

### Answer

```java
preHandle()
```

---

## Q38. Which interceptor method executes after response completion?

### Answer

```java
afterCompletion()
```

---

## Q39. What is the purpose of an Interceptor?

### Answer

An **Interceptor** performs processing:

- Before the Controller
- After the Controller
- After Response Completion

### Common Use Cases

- Logging
- Authentication
- Authorization
- Performance Monitoring
- Request Tracking

---

## Q40. What is the execution order in Spring MVC?

### Answer

```
Client
   ↓
Filter
   ↓
DispatcherServlet
   ↓
Interceptor
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Database
```

The **response follows the reverse path** back to the client.

---

## Q41. Which annotation enables Spring Security?

### Answer

```java
@EnableWebSecurity
```

> **Note:** In modern Spring Security (Spring Boot 3.x / Spring Security 6), explicitly using `@EnableWebSecurity` is often **optional** because Spring Boot provides auto-configuration.

---

## Q42. What is the default authentication mechanism in Spring Security?

### Answer

The default authentication mechanism is **HTTP Basic Authentication**.

By default, Spring Security:

- Secures all endpoints.
- Generates a temporary password at startup.
- Uses HTTP Basic Authentication unless customized.

---

## Q43. What is the difference between Authentication and Authorization?

| Authentication | Authorization |
|----------------|---------------|
| **Who are you?** | **What can you access?** |
| Verifies identity | Checks permissions |
| Happens first | Happens after authentication |

---

## Q44. Which authentication method is Stateless?

### Answer

**JWT (JSON Web Token)**

### Advantages

- Stateless
- Fast
- Scalable
- No server-side session storage required
- Suitable for Microservices and REST APIs

---

## Q45. Which annotation enables Caching?

### Answer

```java
@EnableCaching
```

This annotation enables Spring's annotation-driven cache management.

---

## Q46. Which annotation caches method results?

### Answer

```java
@Cacheable
```

### Other Cache Annotations

- `@CachePut` → Updates the cache without skipping method execution.
- `@CacheEvict` → Removes data from the cache.

---

## Q47. What is the default Cache Provider in Spring Boot?

### Answer

**Simple In-Memory Cache**

If no cache provider is configured, Spring Boot uses a **ConcurrentHashMap-based cache** (`ConcurrentMapCacheManager`).

---

## Q48. What is the difference between Fixed Rate, Fixed Delay, and Cron?

| Annotation | Description |
|------------|-------------|
| `@EnableScheduling` | Enables scheduling support |
| `@Scheduled(fixedRate = 5000)` | Executes every **5 seconds from the start** of the previous execution |
| `@Scheduled(fixedDelay = 5000)` | Executes **5 seconds after the previous execution completes** |
| `@Scheduled(cron = "0 0 10 * * ?")` | Executes according to a **Cron expression** |

---

## Q49. Which thread pool is used by default for Scheduled tasks?

### Answer

**SingleThreadScheduledExecutor**

By default, all scheduled tasks run on a **single thread** unless a custom `TaskScheduler` or `TaskExecutor` is configured.

---

## Q50. How would you define Spring Boot in three lines?

### Answer

Spring Boot is an extension of the Spring Framework that simplifies application development through **auto-configuration**, **starter dependencies**, and **embedded servers**.

It eliminates most boilerplate configuration and enables developers to build **standalone, production-ready applications** quickly.

It also provides production-ready features such as **Actuator**, **externalized configuration**, **monitoring**, and **easy deployment**.

---

# 🎯 Spring Boot One-Line Interview Summary

> **Spring Boot is a framework built on top of Spring that simplifies enterprise application development using auto-configuration, starter dependencies, embedded servers, and production-ready features, enabling developers to build standalone, scalable RESTful applications with minimal configuration.**

---
