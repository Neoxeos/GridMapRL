class RL
{
    constructor(env, config)
    {
        this.config = config;
        this.env = env;
        this.Q = [];
        this.P = [];

        this.state = [0,0];
        this.init();
    }

    init()
    {
        for (let x = 0; x < this.env.width; x++)
        {
            this.Q.push([]);
            for (let y = 0; y < this.env.height; y++)
            {
                this.Q[x].push([]);
                for (let a = 0; a < this.env.actions.length; a++)
                {
                    this.Q[x][y].push(0);
                }
            }
        }

        for (let x = 0; x < this.env.width; x++)
        {
            this.P.push([]);
            for (let y = 0; y < this.env.height; y++)
            {
                this.P[x].push([]);
                for (let a = 0; a < this.env.actions.length; a++)
                {
                    this.P[x][y].push(1.0/this.env.actions.length);
                }
            }
        }
    }

    learningIteration()
    {

    }

    selectActionFomPolicy()
    {
        let maxValueActionIndex = 0;


        return maxValueActionIndex;
    }

    updateValue(state, action, reward, nextState)
    {

    }

    updatePolicy(state)
    {
    } 
}