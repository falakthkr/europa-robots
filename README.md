
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
