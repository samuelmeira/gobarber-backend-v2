import Appointment from '../models/Appointment';
import { AppDataSource } from '../database/data-source';

const AppointmentRepository = AppDataSource.getRepository(Appointment).extend({
  async findByDate(date: Date) {
    return (await this.findOne({ where: { date } })) || null;
  },
});

export default AppointmentRepository;
