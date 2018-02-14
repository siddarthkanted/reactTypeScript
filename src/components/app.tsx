import * as React from "react";


interface IProps {
    name: string;
}

interface IState {
    currentTask: string;
    tasks: Array<string>;
}

//first argument represents props, second argument represents state .
export class App extends React.Component<IProps,IState>{
	
	constructor(props:IProps){
		super(props);
		this.state = {currentTask:"", tasks:[]};
	}
	
	//since formSubmit method does not return anything. make the return type as void
	public formSubmit(e:any):void{
		//normally during form submit. page gets refreshed. to prevent it we use preventDefault method
		e.preventDefault(); 
		this.setState({currentTask:"", tasks:[...this.state.tasks, this.state.currentTask]});
	}
	
	//make a method public if it needs to be called from html
	public setCurrentTask(e:any):void{
		this.setState({currentTask:e.target.value});
	}
	
	public renderTask(task:string, index:number):JSX.Element{
		return <div>{index} : {task}</div>;
	}
	
	//this method returns an array of div
	public renderTasks():JSX.Element[]{
		return this.state.tasks.map((x:string,n:number) => this.renderTask(x, n));
	}
	
	//make a method public if it returns html. Public is optional.
	public render():JSX.Element{
		console.log(this.state.tasks);
		return (<div>
		   <h1>react typescript to do list form</h1>
		   <form onSubmit={e => this.formSubmit(e)}>
		  <input type="text" onChange={e=>this.setCurrentTask(e)}></input>
          <button>add</button></form>{this.renderTasks()}
		</div>);
	}
}
