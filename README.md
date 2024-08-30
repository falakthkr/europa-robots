
# API Endpoints

## POST /api/navigate

This endpoint accepts a JSON payload that specifies the plateau dimensions, initial robot positions, and their respective movement commands. It returns the final positions and orientations of each robot after executing the commands.

### Request Body

```json
{
    "plateau": "5 5",
    "robots": [
        {
            "start": "1 2 N",
            "commands": "LMLMLMLMM"
        },
        {
            "start": "3 3 E",
            "commands": "MMRMMRMRRM"
        }
    ]
}
```

- `plateau`: A string representing the upper-right corner of the plateau grid. The lower-left corner is assumed to be (0, 0).
- `robots`: An array of robots, each with a starting position (`start`) and a string of movement commands (`commands`).

### Response

```json
{
    "results": [
        "1 3 N",
        "5 1 E"
    ]
}
```

- `results`: An array of strings representing the final positions and orientations of the robots after executing the commands.

## Examples

Here’s how you can interact with the API:

### Using `curl`

```bash
curl -X POST http://localhost:3000/api/navigate -H "Content-Type: application/json" -d '{
    "plateau": "5 5",
    "robots": [
        {
            "start": "1 2 N",
            "commands": "LMLMLMLMM"
        },
        {
            "start": "3 3 E",
            "commands": "MMRMMRMRRM"
        }
    ]
}'
```

### Expected Response

```json
{
    "results": [
        "1 3 N",
        "5 1 E"
    ]
}
```

## Running the Project Locally

Follow these steps to run the project on your local machine:

1. **Clone the Repository**  
   Clone the repository to your local machine using Git:
   ```bash
   git clone [<repository-url>](https://github.com/falakthkr/europa-robots)
   ```
2. **Navigate to the project directory**
   Move into the project directory:
   ```bash
   cd europa-robots
   ```
3. **Install Dependencies**
   Install the necessary dependencies using npm or yarn:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
4. **Run the Application**
   Start the application:
   ```bash
   node server.js
   ```

Then you can test it using your methods, I personally prefer postman for API testing.

