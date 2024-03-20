import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const ClassModel = types
  .model("Class")
  .props({
    id: types.identifier,
    name: types.string,
    location: types.string,
    price: types.number,
    description: types.string,
    language: types.string,
    requirements: types.array(types.string),
    toBring: types.array(types.string),
    availability: types.array(AvailabilityModel),
    coachId: types.reference(types.late(() => CoachModel)),
    studentIds: types.array(types.reference(types.late(() => StudentModel))),
    reviewIds: types.array(types.reference(types.late(() => ReviewModel))),
    dateCreated: types.string, 
    category: types.string, 
  })
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Class extends Instance<typeof ClassModel> {}
export interface ClassSnapshotOut extends SnapshotOut<typeof ClassModel> {}
export interface ClassSnapshotIn extends SnapshotIn<typeof ClassModel> {}
export const createClassDefaultModel = () => types.optional(ClassModel, {})
