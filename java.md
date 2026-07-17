# Core Java Interview Questions & Answers (Top 30)

---

# Q1. What happens when you compile a Java program?

## Answer

When a Java program is compiled:

1. You write the source code in a `.java` file.
2. The Java compiler (`javac`) compiles the source code.
3. The compiler generates a `.class` file containing **bytecode**.
4. This bytecode is platform-independent and can be executed by the JVM.

### Flow

```text
.java Source File
        │
        ▼
 javac Compiler
        │
        ▼
.class (Bytecode)
```

---

# Q2. What happens when you run a Java program?

## Answer

When a Java program is executed:

1. The JVM loads the `.class` file.
2. The **Class Loader** loads the required classes.
3. The **Bytecode Verifier** validates the bytecode.
4. The **Execution Engine** converts bytecode into machine code using the **JIT Compiler**.
5. The CPU executes the machine code.

### Flow

```text
.class
   │
   ▼
JVM
   │
Class Loader
   │
Bytecode Verifier
   │
Execution Engine (JIT)
   │
Machine Code
   │
CPU Execution
```

---

# Q3. What is the difference between JDK, JRE, and JVM?

| JDK | JRE | JVM |
|-----|-----|-----|
| Java Development Kit | Java Runtime Environment | Java Virtual Machine |
| Used for development | Used for running Java programs | Executes bytecode |
| Contains JRE + Development Tools | Contains JVM + Libraries | Converts bytecode into machine code |
| Includes `javac`, `jar`, `javadoc`, `jdb` | Runtime only | Execution engine |

### Relationship

```text
JDK
 ├── JRE
 │     ├── JVM
 │     └── Java Libraries
 ├── javac
 ├── jar
 ├── javadoc
 └── jdb
```

---

# Q4. Which memory areas are allocated by the JVM?

## Answer

The JVM allocates the following memory areas:

- Heap Memory
- Stack Memory
- Method Area
- Program Counter (PC Register)
- Native Method Stack

### Interview Answer

> ✔ Heap, Stack, Method Area, PC Register, and Native Method Stack.

---

# Q5. What is the difference between Heap Memory and Stack Memory?

| Heap Memory | Stack Memory |
|------------|--------------|
| Stores Objects | Stores Method Calls |
| Stores Instance Variables | Stores Local Variables |
| Shared among Threads | Each Thread has its own Stack |
| Larger Memory | Smaller Memory |

---

# Q6. Are Strings mutable in Java?

## Answer

No.

Strings are **immutable**.

Once a `String` object is created, its value cannot be changed.

### Example

```java
String s = "Hello";
s.concat(" World");

System.out.println(s);
```

### Output

```text
Hello
```

> String is immutable in Java, meaning once a String object is created its value cannot be changed. Any modification creates a new String object. Java made String immutable for several reasons: security, since Strings store sensitive data like passwords and URLs; efficient memory usage through the String Constant Pool; thread safety because immutable objects can be shared across threads; and better performance by caching hash codes, which makes lookups in collections like HashMap faster. If mutable strings are needed, we use StringBuilder or StringBuffer
---



# Q7. Can a Static Method access Non-Static Variables?

## Answer

No.

Static methods belong to the class, while non-static variables belong to objects.

A static method cannot directly access instance variables.

### Example

```java
class Demo {

    int x = 10;

    static void show() {

        System.out.println(x); // Compile Error

    }

}
```

---

# Q8. What are the default values of Java Data Types?

| Data Type | Default Value |
|-----------|---------------|
| byte | 0 |
| short | 0 |
| int | 0 |
| long | 0L |
| float | 0.0f |
| double | 0.0d |
| char | '\u0000' (null character) |
| boolean | false |
| Object | null |
| String | null |

---

# Q9. What is the difference between Local, Instance, and Static Variables?

| Local Variable | Instance Variable | Static Variable |
|---------------|-------------------|-----------------|
| Declared inside methods | Declared inside class | Declared using `static` |
| No default value | Has default value | Has default value |
| Stored in Stack | Stored in Heap | Stored in Method Area |
| Exists during method execution | One copy per object | One copy per class |

---

# Q10. What is the difference between `break`, `continue`, and `return`?

| Keyword | Purpose |
|----------|---------|
| `break` | Exits the loop |
| `continue` | Skips current iteration |
| `return` | Exits the current method |

### Example

```java
for (int i = 1; i <= 5; i++) {

    if (i == 2)
        continue;

    if (i == 4)
        break;

    System.out.println(i);

}

System.out.println("Hello");
```

### Output

```text
1
3
Hello
```

> `return` would terminate the entire method.

---

# Q11. What is the parent class of all classes in Java?

## Answer

`java.lang.Object`

Every class directly or indirectly extends the `Object` class.

### Example

```java
class Employee {

}
```

Equivalent to:

```java
class Employee extends Object {

}
```

---

# Q12. Can an Array store different Data Types?

## Answer

Normally, **No**.

Arrays are **homogeneous**.

### Example

```java
int[] arr = {1, 2, 3};
```

However,

An `Object[]` can store different object types.

```java
Object[] arr = {10, "Hello", 12.5, true};
```

---

# Q13. What is the difference between HashMap and Hashtable?

| HashMap | Hashtable |
|----------|-----------|
| Allows one null key | No null keys |
| Allows multiple null values | No null values |
| Not synchronized | Synchronized |
| Faster | Slower |
| Not thread-safe | Thread-safe |

---

# Q14. What is the difference between `throw` and `throws`?

| `throw` | `throws` |
|----------|----------|
| Used to explicitly throw an exception | Declares exceptions |
| Used inside method body | Used in method signature |
| Throws one exception | Can declare multiple exceptions |

### Example

```java
throw new IOException();
```

```java
public void readFile() throws IOException
```

---

# Q15. Which Try-Catch combinations are valid?

## Valid

### ✅ `try` + `catch`

```java
try {

}
catch (Exception e) {

}
```

---

### ✅ `try` + `finally`

```java
try {

}
finally {

}
```

---

### ✅ `try` + `catch` + `finally`

```java
try {

}
catch (Exception e) {

}
finally {

}
```

---

## Invalid

- ❌ `try` alone
- ❌ `catch` without `try`
- ❌ `finally` without `try`

---

# Q16. What is the difference between Error and Exception?

## Answer

Both **Error** and **Exception** are subclasses of `Throwable`, but they represent different types of problems.

| Exception | Error |
|-----------|-------|
| Recoverable | Generally unrecoverable |
| Can be handled using `try-catch` | Usually cannot be handled |
| Caused by application issues | Caused by JVM or system failures |
| Examples: `IOException`, `SQLException`, `ArithmeticException` | Examples: `OutOfMemoryError`, `StackOverflowError`, `VirtualMachineError` |

### Interview Tip

> **Exceptions** should be handled by the application, while **Errors** usually indicate serious JVM or system failures.

---

# Q17. What is the parent class of both Error and Exception?

## Answer

The parent class of both **Error** and **Exception** is `Throwable`.

### Hierarchy

```text
Object
   │
   ▼
Throwable
   ├── Error
   └── Exception
```

---

# Q18. What is the parent class of Checked and Unchecked Exceptions?

## Answer

The parent class is **Exception**.

### Hierarchy

```text
Object
   │
Throwable
   │
Exception
   ├── Checked Exceptions
   └── RuntimeException
          └── Unchecked Exceptions
```

### Examples

**Checked Exceptions**

- `IOException`
- `SQLException`
- `FileNotFoundException`

**Unchecked Exceptions**

- `NullPointerException`
- `ArithmeticException`
- `ArrayIndexOutOfBoundsException`

---

# Q19. Which Exceptions are Checked and Which are Unchecked?

| Exception | Type |
|-----------|------|
| `IOException` | Checked |
| `FileNotFoundException` | Checked |
| `SQLException` | Checked |
| `NullPointerException` | Unchecked |
| `ArithmeticException` | Unchecked |
| `ArrayIndexOutOfBoundsException` | Unchecked |

### Memory Trick

- **Checked Exceptions** → Compiler checks them.
- **Unchecked Exceptions** → Occur at runtime.

---

# Q20. What is Garbage Collection in Java?

## Answer

Garbage Collection (GC) is the process by which the JVM automatically removes objects that are no longer referenced.

It helps to:

- Free Heap Memory
- Prevent Memory Leaks
- Improve Memory Management

### Example

```java
String s = new String("Hello");
s = null;
```

The `"Hello"` object becomes **eligible for Garbage Collection** because no reference points to it.

### Interview Note

> Calling `System.gc()` only **requests** garbage collection. The JVM is **not guaranteed** to execute it immediately.

---

# Q21. What is the difference between `final`, `finally`, and `finalize()`?

| `final` | `finally` | `finalize()` |
|---------|-----------|--------------|
| Keyword | Block | Method |
| Prevents modification | Always executes after `try/catch` | Called by GC before object cleanup *(Deprecated)* |
| Used with class, method, variable | Used in exception handling | Defined in `Object` class |

## `final`

```java
final int x = 10;
```

Cannot be reassigned.

```java
final class Animal {
}
```

Cannot be inherited.

```java
final void display() {
}
```

Cannot be overridden.

## `finally`

```java
try {
    // code
} finally {
    System.out.println("Always Executes");
}
```

Executes whether or not an exception occurs.

## `finalize()`

```java
@Override
protected void finalize() throws Throwable {
    System.out.println("Cleanup");
}
```

Called before garbage collection.

### Interview Tip

> `finalize()` is **deprecated** (since Java 9) and should not be used in modern Java.

---

# Q22. When does the `finally` block NOT execute?

## Answer

Normally, the `finally` block always executes.

The main exception is when the JVM terminates using:

```java
System.exit(0);
```

### Example

```java
try {
    System.exit(0);
} finally {
    System.out.println("Won't Execute");
}
```

### Output

```text
Nothing is printed.
```

Because the JVM terminates immediately.

---

# Q23. Explain the complete `main()` method signature.

```java
public static void main(String[] args)
```

| Keyword | Meaning |
|----------|---------|
| `public` | Accessible to JVM from outside the class |
| `static` | JVM can call it without creating an object |
| `void` | Returns nothing |
| `main` | Entry point of the program |
| `String[] args` | Command-line arguments |

### Interview Tip

> The JVM specifically looks for this exact signature to start program execution.

---

# Q24. Can we have more than one `main()` method in a class?

## Answer

Yes.

This is called **Method Overloading**.

### Example

```java
public class Demo {

    public static void main(String[] args) {
        main(10);
    }

    public static void main(int x) {
        System.out.println(x);
    }
}
```

### Interview Note

The JVM invokes only:

```java
public static void main(String[] args)
```

---

# Q25. Can multiple classes in the same project have a `main()` method?

## Answer

Yes.

Every Java class can have its own `main()` method.

### Example

```java
class A {

    public static void main(String[] args) {
        System.out.println("A");
    }

}

class B {

    public static void main(String[] args) {
        System.out.println("B");
    }

}
```

You can choose which class to execute.

---

# Q26. What is the difference between

```java
main(String[] args)
```

and

```java
main(String args[])
```

## Answer

There is **no difference**.

Both declarations are exactly the same.

```java
public static void main(String[] args)
```

is simply the preferred and more readable style.

---

# Q27. What is the default initial capacity of a HashMap?

## Answer

The default initial capacity is **16**.

### Important Facts

- Default Capacity = **16**
- Default Load Factor = **0.75**
- Resize occurs when:

```text
Capacity × Load Factor
```

For the default HashMap:

```text
16 × 0.75 = 12
```

It resizes after the **12th element** is inserted.

---

# Q28. What is the default initial capacity of an ArrayList?

## Answer

The default capacity is **10** *(when the first element is added).*

### Important Points

- Default constructor creates an **empty list**.
- Internal capacity grows to **10** upon the first insertion.
- Capacity automatically increases as needed.

### Example

```java
ArrayList<String> list = new ArrayList<>();
```

---

# Q29. Which classes are immutable in Java?

## Answer

Among the following:

- ✅ `String`
- ❌ `StringBuilder`
- ❌ `StringBuffer`

Only **String** is immutable.

| Class | Mutable? |
|--------|----------|
| `String` | ❌ No |
| `StringBuilder` | ✅ Yes |
| `StringBuffer` | ✅ Yes |

---

# Q30. Is Java completely Object-Oriented?

## Answer

No.

Java is **not 100% Object-Oriented** because it supports **primitive data types**.

### Primitive Types

- `int`
- `char`
- `boolean`
- `float`
- `double`
- `byte`
- `short`
- `long`

These are **not objects**.

### Wrapper Classes

| Primitive | Wrapper Class |
|-----------|---------------|
| `int` | `Integer` |
| `char` | `Character` |
| `boolean` | `Boolean` |
| `double` | `Double` |
| `float` | `Float` |
| `long` | `Long` |
| `short` | `Short` |
| `byte` | `Byte` |

### Interview Answer

> **Java is mostly object-oriented, but not completely, because it supports primitive data types in addition to objects.**

---

# Quick Interview Summary

| Topic | Key Point |
|--------|-----------|
| Error vs Exception | Error = JVM failure, Exception = Recoverable |
| Parent Class | `Throwable` |
| Checked Exception | Compiler checks |
| Unchecked Exception | RuntimeException |
| Garbage Collection | Removes unreachable objects |
| `System.gc()` | Only requests GC |
| `final` | Prevents modification |
| `finally` | Always executes (except JVM termination) |
| `finalize()` | Deprecated |
| `main()` | Program entry point |
| HashMap Capacity | 16 |
| HashMap Load Factor | 0.75 |
| ArrayList Initial Capacity | 10 (on first insertion) |
| Immutable Class | `String` |
| Java OOP | Not 100% object-oriented due to primitives |

---
