
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string;
  tags: string[];
  readingTime?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable Microservices with Spring Boot",
    slug: "building-scalable-microservices-spring-boot",
    date: "2025-04-25",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=400",
    excerpt: "A deep dive into architecting robust microservices using Spring Boot, focusing on scalability and resilience patterns.",
    content: `
# Building Scalable Microservices with Spring Boot

In today's cloud-native world, building microservices that can scale efficiently is crucial. Spring Boot offers a robust framework for creating such services. Let's explore some best practices.

## Understanding Microservices Architecture

Microservices architecture breaks applications into loosely coupled, independently deployable services. Each service handles a specific business function and communicates with other services through well-defined APIs.

## Key Benefits of Using Spring Boot

- Simplified dependency management with starters
- Embedded servers eliminate deployment complexity
- Production-ready monitoring with Spring Actuator
- Easy integration with Spring Cloud for distributed systems

## Best Practices

### 1. Containerization

Using Docker with Spring Boot applications provides consistency across environments:

\`\`\`dockerfile
FROM openjdk:17-jdk-slim
COPY target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
\`\`\`

### 2. Service Discovery

Implementing service discovery with Eureka:

\`\`\`java
@SpringBootApplication
@EnableEurekaClient
public class ServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(ServiceApplication.class, args);
    }
}
\`\`\`

### 3. Circuit Breaker Pattern

Implementing resilience with Spring Cloud Circuit Breaker:

\`\`\`java
@Service
public class ResillientService {
    
    @Autowired
    private CircuitBreakerFactory circuitBreakerFactory;
    
    public String getServiceData() {
        return circuitBreakerFactory.create("serviceA")
            .run(() -> externalServiceCall(), throwable -> fallbackMethod());
    }
}
\`\`\`

## Conclusion

Building microservices with Spring Boot offers a powerful approach to creating scalable, resilient applications. By following these patterns and best practices, you can ensure your services are ready for production demands.
    `,
    tags: ["Microservices", "Spring Boot", "Architecture"],
    readingTime: "6 min"
  },
  {
    id: 2,
    title: "Optimizing API Performance with Redis Caching",
    slug: "optimizing-api-performance-redis-caching",
    date: "2025-04-18",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=400",
    excerpt: "Learn how to improve API response times by implementing efficient caching strategies with Redis.",
    content: `
# Optimizing API Performance with Redis Caching

When building high-performance APIs, response time matters. Redis offers powerful caching capabilities that can dramatically improve performance. Here's how to implement it effectively.

## Why Redis for API Caching?

Redis provides:
- In-memory storage for ultra-fast responses
- Versatile data structures
- Pub/sub capabilities
- Automatic expiration

## Implementation Strategies

### 1. Full Response Caching

Caching entire API responses is ideal for frequently requested data that doesn't change often:

\`\`\`javascript
const getProductData = async (req, res) => {
  const productId = req.params.id;
  const cacheKey = \`product:\${productId}\`;
  
  // Try to get from cache first
  const cachedData = await redisClient.get(cacheKey);
  if (cachedData) {
    return res.json(JSON.parse(cachedData));
  }
  
  // If not in cache, get from database
  const productData = await database.getProduct(productId);
  
  // Store in cache with 1-hour expiration
  await redisClient.setEx(cacheKey, 3600, JSON.stringify(productData));
  
  return res.json(productData);
};
\`\`\`

### 2. Partial Caching

For complex APIs, you can cache specific components:

\`\`\`java
@Service
public class ProductService {
    
    @Autowired
    private RedisTemplate redisTemplate;
    
    public List<Review> getProductReviews(Long productId) {
        String cacheKey = "product:" + productId + ":reviews";
        
        // Try cache first
        List<Review> cachedReviews = (List<Review>) redisTemplate.opsForValue().get(cacheKey);
        if (cachedReviews != null) {
            return cachedReviews;
        }
        
        // Get from database
        List<Review> reviews = reviewRepository.findByProductId(productId);
        
        // Cache result
        redisTemplate.opsForValue().set(cacheKey, reviews, 30, TimeUnit.MINUTES);
        
        return reviews;
    }
}
\`\`\`

### 3. Cache Invalidation

Keeping cached data fresh is crucial:

\`\`\`python
def update_product(product_id, updated_data):
    # Update in database
    db.products.update_one({"id": product_id}, {"$set": updated_data})
    
    # Invalidate cache
    cache_keys = [
        f"product:{product_id}",
        f"product:{product_id}:reviews",
        "product:featured"  # If this product could be in featured list
    ]
    
    for key in cache_keys:
        redis_client.delete(key)
\`\`\`

## Performance Gains

In a typical e-commerce application, implementing Redis caching can reduce API response times from 300ms to under 10ms for cached queries, significantly improving user experience.

## Best Practices

1. Set appropriate TTL (Time To Live) based on data change frequency
2. Use cache keys that clearly identify the resource
3. Implement proper invalidation strategies
4. Monitor cache hit/miss ratios

By implementing these Redis caching strategies, you can significantly improve your API performance while reducing database load.
    `,
    tags: ["Redis", "API", "Performance"],
    readingTime: "5 min"
  },
  {
    id: 3,
    title: "Modern Authentication with JWT and OAuth2",
    slug: "modern-authentication-jwt-oauth2",
    date: "2025-04-10",
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=400",
    excerpt: "Implement secure authentication in your applications using JWT tokens and OAuth2 standards.",
    content: `
# Modern Authentication with JWT and OAuth2

Implementing secure, modern authentication is critical for any application. JWT (JSON Web Tokens) and OAuth2 provide powerful standards for authentication and authorization. Let's explore how to implement them effectively.

## Understanding JWT

JSON Web Tokens are an open standard for securely transmitting information between parties as a JSON object. JWTs consist of:

- Header: Contains the type of token and the signing algorithm
- Payload: Contains the claims (user information and metadata)
- Signature: Used to verify the token hasn't been altered

## Basic JWT Implementation

Here's a simple example using Node.js and Express:

\`\`\`javascript
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

app.post('/login', (req, res) => {
  // Validate user credentials (omitted for brevity)
  const user = { id: 123, username: 'johndoe', role: 'admin' };
  
  // Generate JWT token
  const token = jwt.sign(
    { userId: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  
  res.json({ token });
});

// Middleware to protect routes
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.sendStatus(401);
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.get('/protected-route', authenticateToken, (req, res) => {
  res.json({ data: 'Protected data', user: req.user });
});
\`\`\`

## OAuth2 Integration

OAuth2 provides a secure way for users to grant applications limited access to their accounts without sharing credentials.

Here's how to implement OAuth2 with Spring Security:

\`\`\`java
@Configuration
@EnableWebSecurity
@EnableOAuth2Client
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private OAuth2ClientProperties oauth2ClientProperties;
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers("/", "/login**", "/error**").permitAll()
                .anyRequest().authenticated()
            .and()
                .oauth2Login()
                .loginPage("/login")
                .userInfoEndpoint()
                    .userService(oAuth2UserService())
            .and()
                .successHandler(customAuthenticationSuccessHandler());
    }
    
    @Bean
    public OAuth2UserService<OAuth2UserRequest, OAuth2User> oAuth2UserService() {
        DefaultOAuth2UserService delegate = new DefaultOAuth2UserService();
        return (userRequest) -> {
            OAuth2User oAuth2User = delegate.loadUser(userRequest);
            // Custom processing here
            return oAuth2User;
        };
    }
}
\`\`\`

## Best Practices

### For JWT:

1. **Keep tokens short-lived** - Use refresh tokens for longer sessions
2. **Store sensitive data in encrypted form**
3. **Use HTTPS** to prevent token interception
4. **Implement proper token revocation**

### For OAuth2:

1. **Use state parameters** to prevent CSRF attacks
2. **Validate redirect URIs** strictly
3. **Implement PKCE** for mobile and SPA applications
4. **Limit scopes** to the minimum required

## Conclusion

Modern authentication using JWT and OAuth2 provides robust security while improving user experience. By following these best practices, you can implement authentication that is both secure and user-friendly.
    `,
    tags: ["Security", "Authentication", "JWT"],
    readingTime: "7 min"
  },
  {
    id: 4,
    title: "Infrastructure as Code: Managing AWS with Terraform",
    slug: "infrastructure-as-code-aws-terraform",
    date: "2025-03-28",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=400",
    excerpt: "Learn how to manage cloud infrastructure efficiently using Terraform for AWS resources.",
    content: `
# Infrastructure as Code: Managing AWS with Terraform

Infrastructure as Code (IaC) has revolutionized how we manage cloud resources. Terraform provides a powerful, declarative approach to defining and deploying infrastructure. Let's explore how to effectively use Terraform with AWS.

## Benefits of Infrastructure as Code

- **Version Control**: Track changes to infrastructure
- **Consistency**: Eliminate environment drift
- **Automation**: Repeatable deployments
- **Self-Documentation**: Code as documentation
- **Reduced Errors**: Eliminate manual configuration

## Getting Started with Terraform for AWS

### 1. Basic Structure

A typical Terraform project structure for AWS:

\`\`\`
project/
├── main.tf          # Primary configuration
├── variables.tf     # Input variables
├── outputs.tf       # Output values
├── provider.tf      # Provider configuration
└── terraform.tfvars # Variable values (gitignored)
\`\`\`

### 2. Provider Configuration

\`\`\`hcl
# provider.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
  
  default_tags {
    tags = {
      Environment = var.environment
      Project     = var.project_name
      ManagedBy   = "Terraform"
    }
  }
}
\`\`\`

### 3. Creating Basic Infrastructure

\`\`\`hcl
# main.tf
# VPC and Network Setup
resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr
  enable_dns_support   = true
  enable_dns_hostnames = true
  
  tags = {
    Name = "${var.project_name}-vpc"
  }
}

resource "aws_subnet" "public" {
  count             = length(var.public_subnet_cidrs)
  vpc_id            = aws_vpc.main.id
  cidr_block        = var.public_subnet_cidrs[count.index]
  availability_zone = var.availability_zones[count.index]
  
  tags = {
    Name = "${var.project_name}-public-${count.index + 1}"
  }
}

resource "aws_subnet" "private" {
  count             = length(var.private_subnet_cidrs)
  vpc_id            = aws_vpc.main.id
  cidr_block        = var.private_subnet_cidrs[count.index]
  availability_zone = var.availability_zones[count.index]
  
  tags = {
    Name = "${var.project_name}-private-${count.index + 1}"
  }
}

# Web Server Cluster
resource "aws_security_group" "web" {
  name        = "${var.project_name}-web-sg"
  description = "Allow inbound traffic for web servers"
  vpc_id      = aws_vpc.main.id

  ingress {
    description = "HTTP from anywhere"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_launch_template" "web" {
  name_prefix   = "${var.project_name}-web-"
  image_id      = var.ami_id
  instance_type = var.instance_type
  
  user_data = base64encode(<<-EOF
    #!/bin/bash
    echo "Hello from Terraform-managed EC2 instance!"
    yum update -y
    yum install -y httpd
    systemctl start httpd
    systemctl enable httpd
    echo "<h1>Deployed via Terraform</h1>" > /var/www/html/index.html
    EOF
  )
  
  network_interfaces {
    associate_public_ip_address = true
    security_groups             = [aws_security_group.web.id]
  }
}

resource "aws_autoscaling_group" "web" {
  desired_capacity    = var.asg_desired
  max_size            = var.asg_max
  min_size            = var.asg_min
  vpc_zone_identifier = aws_subnet.public[*].id
  
  launch_template {
    id      = aws_launch_template.web.id
    version = "$Latest"
  }
}
\`\`\`

## Advanced Terraform Techniques

### 1. Modules

Reusable modules help organize complex infrastructure:

\`\`\`
modules/
├── networking/
├── compute/
└── database/
\`\`\`

Using modules:

\`\`\`hcl
module "networking" {
  source = "./modules/networking"
  
  vpc_cidr             = var.vpc_cidr
  public_subnet_cidrs  = var.public_subnet_cidrs
  private_subnet_cidrs = var.private_subnet_cidrs
}

module "compute" {
  source = "./modules/compute"
  
  vpc_id              = module.networking.vpc_id
  public_subnet_ids   = module.networking.public_subnet_ids
  instance_type       = var.instance_type
  ami_id              = var.ami_id
}
\`\`\`

### 2. State Management

Storing state remotely in S3 with locking via DynamoDB:

\`\`\`hcl
terraform {
  backend "s3" {
    bucket         = "my-terraform-state-bucket"
    key            = "prod/terraform.tfstate"
    region         = "us-west-2"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}
\`\`\`

### 3. Workspaces

Managing multiple environments:

\`\`\`bash
# Create and switch to dev workspace
terraform workspace new dev
terraform plan -var-file=dev.tfvars

# Switch to production
terraform workspace select prod
terraform plan -var-file=prod.tfvars
\`\`\`

## CI/CD for Terraform

Integrating Terraform into your CI/CD pipeline:

\`\`\`yaml
# Example GitHub Actions workflow
name: Terraform

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  terraform:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Terraform
        uses: hashicorp/setup-terraform@v1
        
      - name: Terraform Init
        run: terraform init
      
      - name: Terraform Format
        run: terraform fmt -check
      
      - name: Terraform Plan
        run: terraform plan
        
      - name: Terraform Apply
        if: github.ref == 'refs/heads/main'
        run: terraform apply -auto-approve
\`\`\`

## Best Practices

1. **Use Remote State** with locking
2. **Modularize** your infrastructure
3. **Use Variables** for configuration
4. **Keep Secrets Separate** from code
5. **Version Your Modules**
6. **Plan Before Applying** changes
7. **Document Your Code**

By embracing Infrastructure as Code with Terraform, you can manage AWS resources with greater consistency, reliability, and automation.
    `,
    tags: ["AWS", "Terraform", "DevOps"],
    readingTime: "8 min"
  },
  {
    id: 5,
    title: "Creating Robust CI/CD Pipelines with GitHub Actions",
    slug: "robust-cicd-pipelines-github-actions",
    date: "2025-03-15",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=400",
    excerpt: "Design and implement efficient CI/CD pipelines using GitHub Actions for automated testing and deployment.",
    content: `
# Creating Robust CI/CD Pipelines with GitHub Actions

Continuous Integration and Continuous Deployment (CI/CD) are essential practices for modern software development. GitHub Actions provides a powerful, flexible way to implement CI/CD workflows directly from your GitHub repository. Let's explore how to create robust CI/CD pipelines with GitHub Actions.

## Why GitHub Actions?

- **Tightly integrated** with GitHub repositories
- **Free tier** for public repositories
- **Marketplace** with reusable actions
- **Multi-platform** support (Linux, macOS, Windows)
- **Matrix builds** for testing across environments

## Basic Workflow Structure

GitHub Actions workflows are defined in YAML files located in the `.github/workflows` directory of your repository:

\`\`\`yaml
# .github/workflows/main.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build application
        run: npm run build
\`\`\`

## Advanced Workflow Features

### 1. Matrix Strategy

Test across multiple environments:

\`\`\`yaml
jobs:
  test:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node-version: [14.x, 16.x, 18.x]
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm ci
      - run: npm test
\`\`\`

### 2. Caching Dependencies

Improve workflow performance:

\`\`\`yaml
steps:
  - uses: actions/checkout@v2
  
  - name: Set up Node.js
    uses: actions/setup-node@v2
    with:
      node-version: '16'
  
  - name: Cache Node modules
    uses: actions/cache@v2
    with:
      path: ~/.npm
      key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
      restore-keys: |
        ${{ runner.os }}-node-
  
  - name: Install dependencies
    run: npm ci
\`\`\`

### 3. Conditional Jobs

Run jobs based on conditions:

\`\`\`yaml
jobs:
  test:
    # ... test job configuration
    
  deploy-staging:
    needs: test
    if: github.event_name == 'push' && github.ref == 'refs/heads/develop'
    runs-on: ubuntu-latest
    steps:
      # ... staging deployment steps
      
  deploy-production:
    needs: test
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      # ... production deployment steps
\`\`\`

## Complete Example: Spring Boot Application Pipeline

\`\`\`yaml
name: Spring Boot CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Set up JDK 17
        uses: actions/setup-java@v2
        with:
          distribution: 'temurin'
          java-version: '17'
          cache: 'maven'
      
      - name: Build with Maven
        run: mvn -B package --file pom.xml
      
      - name: Run tests
        run: mvn test
      
      - name: Archive JAR artifacts
        uses: actions/upload-artifact@v2
        with:
          name: app-jar
          path: target/*.jar
          
  code-quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: SonarCloud Scan
        uses: SonarSource/sonarcloud-github-action@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
  
  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Run OWASP Dependency Check
        uses: dependency-check/Dependency-Check_Action@main
        with:
          project: 'My Project'
          path: '.'
          format: 'HTML'
          args: >
            --failOnCVSS 7
            --enableRetired
  
  deploy-staging:
    needs: [build-and-test, code-quality, security-scan]
    if: github.ref == 'refs/heads/develop'
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - uses: actions/checkout@v2
      
      - name: Download JAR artifact
        uses: actions/download-artifact@v2
        with:
          name: app-jar
          path: target
      
      - name: Deploy to AWS Elastic Beanstalk
        uses: einaregilsson/beanstalk-deploy@v20
        with:
          aws_access_key: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws_secret_key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          application_name: my-application
          environment_name: staging
          version_label: ${{ github.sha }}
          region: us-east-1
          deployment_package: target/my-application.jar
  
  deploy-production:
    needs: [build-and-test, code-quality, security-scan]
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    environment: production
    steps:
      - uses: actions/checkout@v2
      
      - name: Download JAR artifact
        uses: actions/download-artifact@v2
        with:
          name: app-jar
          path: target
      
      # Production deployment typically requires approval
      - name: Deploy to AWS Elastic Beanstalk Production
        uses: einaregilsson/beanstalk-deploy@v20
        with:
          aws_access_key: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws_secret_key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          application_name: my-application
          environment_name: production
          version_label: ${{ github.sha }}
          region: us-east-1
          deployment_package: target/my-application.jar
\`\`\`

## Environment Secrets and Variables

Securely manage sensitive information:

\`\`\`yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: Deploy with sensitive data
        env:
          API_KEY: ${{ secrets.API_KEY }}
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
        run: ./deploy.sh
\`\`\`

## Best Practices

1. **Keep Workflows Focused**: Create separate workflows for different purposes
2. **Use Reusable Actions**: Leverage the GitHub Actions marketplace
3. **Secure Secrets**: Never hardcode sensitive information
4. **Test the Workflow**: Verify workflows with small changes first
5. **Set Timeouts**: Prevent workflows from running indefinitely
6. **Use Environments**: Separate staging and production configurations
7. **Add Status Badges**: Show build status in your README
8. **Monitor Performance**: Keep an eye on workflow duration

GitHub Actions provides powerful automation capabilities that can transform your development workflow. By implementing robust CI/CD pipelines, you can ensure code quality, automate testing, and simplify deployments.
    `,
    tags: ["CI/CD", "GitHub", "DevOps"],
    readingTime: "10 min"
  }
];
