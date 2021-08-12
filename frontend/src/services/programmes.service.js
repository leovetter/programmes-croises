import { BehaviorSubject } from "rxjs";

class ProgrammesService {

    themesSubject = new BehaviorSubject([]); // How to keep it private
    themes$ = this.themesSubject.asObservable();

    partisSubject = new BehaviorSubject([]);
    partis$ = this.partisSubject.asObservable();

    constructor() {

        if (!ProgrammesService._instance) {
            ProgrammesService._instance = this;
        }

        fetch('http://localhost:9000/themes')
            .then(res => res.json())
            .then(themes => this.themesSubject.next(themes));

        fetch('http://localhost:9000/partis')
            .then(res => res.json())
            .then(partis => this.partisSubject.next(partis));

        return ProgrammesService._instance;
    }

    static getInstance() {
        return this._instance;
    }
}

export default ProgrammesService;