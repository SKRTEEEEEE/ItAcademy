# Exercisis SQL querys base de dades 'Universidad'

1. **Retorna un listado con el primer apellido, segundo apellido y el nombre de todos los alumnos.**  
   El listado deberá estar ordenado alfabéticamente de menor a mayor por el primer apellido, segundo apellido y nombre.
   ```sql
   SELECT p.apellido1, p.apellido2, p.nombre FROM persona p 
    WHERE p.tipo = 'alumno' 
    ORDER BY `p`.`apellido1` ASC, `p`.`apellido2` ASC, `p`.`nombre` asc
   ```
2. **Esbrina el nombre y los dos apellidos de los alumnos que no han dado de alta su número de teléfono en la base de datos.**
    ```sql
    SELECT p.nombre, p.apellido1, p.apellido2 FROM persona p WHERE p.tipo = 'alumno' AND (p.telefono IS NULL OR p.telefono = '');
    ```
3. **Retorna el listado de alumnos que nacieron en 1999.**
    ```sql
    SELECT p.nombre, p.apellido1, p.apellido2
    FROM persona p
    WHERE p.tipo = 'alumno' AND p.fecha_nacimiento LIKE "1999%"
    ```
4. **Retorna el listado de profesores que no han dado de alta su número de teléfono en la base de datos y además su NIF termina en K.**
    ```sql
    SELECT p.nombre, p.apellido1, p.apellido2 FROM persona p WHERE p.tipo = 'profesor' AND (p.telefono IS NULL OR p.telefono = '') AND p.nif LIKE "%K";
    ```   
5. **Retorna el listado de las asignaturas que se imparten en el primer cuatrimestre, en el tercer curso del grado que tiene el identificador 7.**
    ```sql
    
    ```   
6. **Retorna un listado de los profesores junto con el nombre del departamento al que están vinculados.**  
   El listado debe retornar cuatro columnas: primer apellido, segundo apellido, nombre y nombre del departamento.  
   El resultado estará ordenado alfabéticamente de menor a mayor por los apellidos y el nombre.
    ```sql
    
    ```   
7. **Retorna un listado con el nombre de las asignaturas, año de inicio y año de fin del curso escolar del alumno con NIF 26902806M.**
    ```sql
    
    ```   
8. **Retorna un listado con el nombre de todos los departamentos que tienen profesores que imparten alguna asignatura en el Grado en Ingeniería Informática (Plan 2015).**
    ```sql
    
    ```
9. **Retorna un listado con todos los alumnos que se han matriculado en alguna asignatura durante el curso escolar 2018/2019.**
    ```sql
    
    ```
## Consultas con LEFT JOIN y RIGHT JOIN

10. **Retorna un listado con los nombres de todos los profesores y los departamentos que tienen vinculados.**  
    El listado también debe mostrar aquellos profesores que no tienen ningún departamento asociado.  
    El listado deberá retornar cuatro columnas: nombre del departamento, primer apellido, segundo apellido y nombre del profesor.  
    El resultado estará ordenado alfabéticamente de menor a mayor por el nombre del departamento, apellidos y nombre.
    
11. **Retorna un listado con los profesores que no están asociados a un departamento.**
    
12. **Retorna un listado con los departamentos que no tienen profesores asociados.**
    
13. **Retorna un listado con los profesores que no imparten ninguna asignatura.**
    
14. **Retorna un listado con las asignaturas que no tienen un profesor asignado.**
    
15. **Retorna un listado con todos los departamentos que no han impartido asignaturas en ningún curso escolar.**

## Consultas resumen

16. **Retorna el número total de alumnos que hay.**
    
17. **Calcula cuántos alumnos nacieron en 1999.**
    
18. **Calcula cuántos profesores hay en cada departamento.**  
    El resultado solo debe mostrar dos columnas: una con el nombre del departamento y otra con el número de profesores que hay en este departamento.  
    El resultado solo incluirá los departamentos que tienen profesores asociados y deberá estar ordenado de mayor a menor por el número de profesores.
    
19. **Retorna un listado con todos los departamentos y el número de profesores que hay en cada uno de ellos.**  
    Tenga en cuenta que pueden existir departamentos que no tienen profesores asociados.  
    Estos departamentos también deben aparecer en el listado.
    
20. **Retorna un listado con el nombre de todos los grados existentes en la base de datos y el número de asignaturas que tiene cada uno.**  
    Tenga en cuenta que pueden existir grados que no tienen asignaturas asociadas.  
    Estos grados también deben aparecer en el listado.  
    El resultado deberá estar ordenado de mayor a menor por el número de asignaturas.
    
21. **Retorna un listado con el nombre de todos los grados existentes en la base de datos y el número de asignaturas que tiene cada uno, de los grados que tengan más de 40 asignaturas asociadas.**
    
22. **Retorna un listado que muestre el nombre de los grados y la suma del número total de créditos que hay para cada tipo de asignatura.**  
    El resultado debe tener tres columnas: nombre del grado, tipo de asignatura y la suma de los créditos de todas las asignaturas que hay de este tipo.
    
23. **Retorna un listado que muestre cuántos alumnos se han matriculado de alguna asignatura en cada uno de los cursos escolares.**  
    El resultado deberá mostrar dos columnas: una columna con el año de inicio del curso escolar y otra con el número de alumnos matriculados.
    
24. **Retorna un listado con el número de asignaturas que imparte cada profesor.**  
    El listado debe tener en cuenta aquellos profesores que no imparten ninguna asignatura.  
    El resultado mostrará cinco columnas: id, nombre, primer apellido, segundo apellido y número de asignaturas.  
    El resultado estará ordenado de mayor a menor por el número de asignaturas.
    
25. **Retorna todas las datos del alumno más joven.**
    
26. **Retorna un listado con los profesores que tienen un departamento asociado y que no imparten ninguna asignatura.**
