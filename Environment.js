class Environment {
    constructor(array) 
    {
        this.grid = array;
        this.width = array[0].length;
        this.height = array.length;
        this.actions = [[0,-1],[0,1],[-1,0],[1,0]];
    }

    getType(x,y)
    {
        return this.grid[y][x][0];
    }

    get(x,y)
    {
        return this.grid[y][x];
    }

    getNextState(x,y,actionIndex)
    {
        let nx = x + this.actions[actionIndex][0];
        let ny = y + this.actions[actionIndex][1];

        return (this.is00B(nx,ny) || this.isBlocked(nx,ny)) ? [x,y] : [nx, ny];
    }

    getReward(x,y)
    {
        return this.grid[y][x][1];
    }

    setType(x,y,type)
    {
        if (this.is00B(x,y)) {console.log("Warning: Setting 00b Cell", x, y)};
        this.grid[y][x][0] = type;
    }

    setReward(x,y,reward)
    {
        if (this.is00B(x,y)) {console.log("Warning: Setting 00b Cell", x, y)};
        this.grid[y][x][1] = reward;
    }

    getActions()
    {
        return this.actions;
    }

    is00B(x,y)
    {
        return x < 0 || y < 0 || x >= this.width || y >= this.height;
    }

    isBlocked(x,y)
    {
        return !this.is00B(x,y) && this.getType(x,y) === 'W';
    }

    isTerminal(x,y)
    {
        return !this.is00B(x,y) && this.getType(x,y) === 'T';
    } 
}