// app.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// GET all events by caregiver ID
app.get('/events/:caregiverId', async (req, res) => {
  const caregiverId = parseInt(req.params.caregiverId);

  try {
    const events = await prisma.event.findMany({
      where: { caregiverId: caregiverId },
    });
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// GET information of a single event
app.get('/event/:eventId', async (req, res) => {
  const eventId = parseInt(req.params.eventId);

  try {
    const event = await prisma.event.findUnique({
      where: { id: eventId },
    });
    if (!event) {
      res.status(404).json({ error: 'Event not found' });
    } else {
      res.json(event);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// POST: Caregiver wants to input unavailable dates
app.post('/events', async (req, res) => {
  const { start_date, end_date, caregiverId } = req.body;

  try {
    const event = await prisma.event.create({
      data: {
        start_date,
        end_date,
        caregiverId,
      },
    });
    res.json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// PUT: Caregiver wants to modify existing events
app.put('/events/:eventId', async (req, res) => {
  const eventId = parseInt(req.params.eventId);
  const { start_date, end_date } = req.body;

  try {
    const updatedEvent = await prisma.event.update({
      where: { id: eventId },
      data: {
        start_date,
        end_date,
      },
    });
    res.json(updatedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// DELETE: Caregiver wants to delete an existing event
app.delete('/events/:eventId', async (req, res) => {
  const eventId = parseInt(req.params.eventId);

  try {
    await prisma.event.delete({
      where: { id: eventId },
    });
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
