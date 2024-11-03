# Use MySQL base image
FROM mysql:5.7

# Set environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=myapp

# Copy the initialization script
COPY init.sql /docker-entrypoint-initdb.d/
