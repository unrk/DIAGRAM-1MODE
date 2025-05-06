// Classe Projet
class Projet {
  nom: string;
  description: string;
  dateDebut: Date;
  dateFinPrevu: Date;
  budget: number;
  client: string;
  methode: string;

  constructor(nom: string, description: string, dateDebut: Date, dateFinPrevu: Date, budget: number, client: string, methode: string) {
    this.nom = nom;
    this.description = description;
    this.dateDebut = dateDebut;
    this.dateFinPrevu = dateFinPrevu;
    this.budget = budget;
    this.client = client;
    this.methode = methode;
  }

  createTask(tache: Tache): void {
    // Logique pour créer une tâche
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

  constructor(nom: string, description: string, priorite: number, estimation: number, etat: string, developpeurAssigne: Developeur) {
    this.nom = nom;
    this.description = description;
    this.priorite = priorite;
    this.estimation = estimation;
    this.etat = etat;
    this.developpeurAssigne = developpeurAssigne;
  }

  createSubTask(sousTache: SousTache): void {
    // Logique pour créer une sous-tâche
  }

  changeStatus(nouvelEtat: string): void {
    this.etat = nouvelEtat;
    // Logique pour changer le statut
  }
}

// Classe SousTache
class SousTache extends Tache {
  tacheParent: Tache;

  constructor(nom: string, description: string, priorite: number, estimation: number, etat: string, tacheParent: Tache) {
    super(nom, description, priorite, estimation, etat, null); // developpeurAssigne est null pour une sous-tâche
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
    // Logique pour assigner une tâche
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

  consultAssignedTasks(): void {
    // Logique pour consulter les tâches assignées
  }
}

// Classe Livrable
class Livrable {
  nom: string;
  description: string;
  dateLivraisonPrevu: Date;
  etat: string;

  constructor(nom: string, description: string, dateLivraisonPrevu: Date, etat: string) {
    this.nom = nom;
    this.description = description;
    this.dateLivraisonPrevu = dateLivraisonPrevu;
    this.etat = etat;
  }

  defineCompletedTasks(): void {
    // Logique pour définir les tâches complétées
  }
}
