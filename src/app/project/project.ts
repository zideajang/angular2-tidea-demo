export class Project {
    constructor(
    public _id: string,
    public name: string,
    public source_language: string,
    public target_language: string,
    public amount: number,
    public description?: string
  ) {  }
}
