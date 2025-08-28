import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import { AppDataSource } from '@shared/infra/typeorm/data-source';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

const AppointmentRepository = AppDataSource.getRepository(Appointment).extend({
  async findByDate(date: Date) {
    return (await this.findOne({ where: { date } })) || null;
  },
});

export default AppointmentRepository;
