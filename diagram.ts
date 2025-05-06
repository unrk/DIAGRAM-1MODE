// Classe Projet
class Projet {
  nom: string;
  description: string;
  dateDebut: Date;
  dateFinPrevu: Date;
  budget: number;
  client: string;
  methode: string;
  taches: Tache[];

  constructor(nom: string, description: string, dateDebut: Date, dateFinPrevu: Date, budget: number, client: string, methode: string) {
    this.nom = nom;
    this.description = description;
    this.dateDebut = dateDebut;
    this.dateFinPrevu = dateFinPrevu;
    this.budget = budget;
    this.client = client;
    this.methode = methode;
    this.taches = [];
  }

  createTask(tache: Tache): void {
    this.taches.push(tache);
  }
}

// Classe Tache
class Tache {
  nom: string;
  description: string;
  priorite: number;
  estimation: number;
  etat: string;
  developpeurAssigne: Developeur;
  sousTaches: SousTache[];

  constructor(nom: string, description: string, priorite: number, estimation: number, etat: string, developpeurAssigne: Developeur) {
    this.nom = nom;
    this.description = description;
    this.priorite = priorite;
    this.estimation = estimation;
    this.etat = etat;
    this.developpeurAssigne = developpeurAssigne;
    this.sousTaches = [];
  }

  createSubTask(sousTache: SousTache): void {
    this.sousTaches.push(sousTache);
  }

  changeStatus(nouvelEtat: string): void {
    this.etat = nouvelEtat;
    // Logique pour changer le statut
  }
}

// Classe SousTache
class SousTache extends Tache {
  tacheParent: Tache;

  constructor(nom: string, description: string, priorite: number, estimation: number, etat: string, tacheParent: Tache, developpeurAssigne: Developeur) {
    super(nom, description, priorite, estimation, etat, developpeurAssigne);
    this.tacheParent = tacheParent;
  }
}

// Classe Developeur
class Developeur {
  nom: string;
  prenom: string;
  role: string;
  competences: string[];
  salaire: number;

  constructor(nom: string, prenom: string, role: string, competences: string[], salaire: number) {
    this.nom = nom;
    this.prenom = prenom;
    this.role = role;
    this.competences = competences;
    this.salaire = salaire;
  }

  assignTask(tache: Tache): void {
    tache.developpeurAssigne = this;
  }
}

// Classe Equipe
class Equipe {
  nom: string;
  chefEquipe: Developeur;
  listeDeveloppeurs: Developeur[];

  constructor(nom: string, chefEquipe: Developeur, listeDeveloppeurs: Developeur[]) {
    this.nom = nom;
    this.chefEquipe = chefEquipe;
    this.listeDeveloppeurs = listeDeveloppeurs;
  }

  consultAssignedTasks(): Tache[] {
    let assignedTasks: Tache[] = [];
    this.listeDeveloppeurs.forEach(developpeur => {
      // Supposons que chaque développeur a une liste de tâches assignées
      // Ici, nous devons implémenter la logique pour obtenir les tâches assignées à chaque développeur
    });
    return assignedTasks;
  }
}

// Classe Livrable
class Livrable {
  nom: string;
  description: string;
  dateLivraisonPrevu: Date;
  etat: string;
  taches: Tache[];

  constructor(nom: string, description: string, dateLivraisonPrevu: Date, etat: string) {
    this.nom = nom;
    this.description = description;
    this.dateLivraisonPrevu = dateLivraisonPrevu;
    this.etat = etat;
    this.taches = [];
  }

  defineCompletedTasks(taches: Tache[]): void {
    this.taches = taches;
  }
}
