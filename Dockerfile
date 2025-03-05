# Use a lightweight Nginx image as base
FROM nginx:alpine

# Copy all project files to the Nginx html directory
COPY . /usr/share/nginx/html/

# Configure Nginx to handle Single Page Application routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]