import Agenda from "../models/AgendaModel.js";

// Create a new agenda
export const createAgenda = async (req, res) => {
  try {
    const newAgenda = await Agenda.create(req.body);
    res.status(201).json(newAgenda);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all agendas
export const getAllAgendas = async (req, res) => {
  try {
    const agendas = await Agenda.findAll();
    res.status(200).json(agendas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single agenda by ID
export const getAgendaById = async (req, res) => {
  try {
    const agenda = await Agenda.findByPk(req.params.id);
    if (agenda) {
      res.status(200).json(agenda);
    } else {
      res.status(404).json({ message: "Agenda not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an agenda by ID
export const updateAgenda = async (req, res) => {
  try {
    const agenda = await Agenda.findByPk(req.params.id);
    if (agenda) {
      await agenda.update(req.body);
      res.status(200).json(agenda);
    } else {
      res.status(404).json({ message: "Agenda not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an agenda by ID
export const deleteAgenda = async (req, res) => {
  try {
    const agenda = await Agenda.findByPk(req.params.id);
    if (agenda) {
      await agenda.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Agenda not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};