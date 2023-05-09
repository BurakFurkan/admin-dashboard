import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllTeamMembers = createAsyncThunk(
  "team/fetchAllTeamMembers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      return response.data.users;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const initialState = {
  isLoading: false,
  AllTeamMembers: [],
  desk1:[],
  desk2:[],
  desk3:[],
  desk4:[],
  assignedMembers:[],

  selectedTeamMember:null
};

export const TeamMemberSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    memberDetailHandler:(state,action)=>{
      state.selectedTeamMember=state.AllTeamMembers.find(element=>element.id===action.payload)
    },
    deskHandler:(state,action) =>{
        const filterTeam =() =>{
            const filteredTeam=state.AllTeamMembers.filter((teamMember)=>{
                return (teamMember.id!==state.selectedTeamMember.id)
            })
            return filteredTeam
        }
        filterTeam();
        

        ((action.payload===1 && !(state.assignedMembers.some((element) => element.id=== state.selectedTeamMember.id)) )?state.desk1.push(state.selectedTeamMember):null);
        ((action.payload===2 && !(state.assignedMembers.some((element) => element.id=== state.selectedTeamMember.id)) )?state.desk2.push(state.selectedTeamMember):null);
        ((action.payload===3 && !(state.assignedMembers.some((element) => element.id=== state.selectedTeamMember.id)) )?state.desk3.push(state.selectedTeamMember):null);
        ((action.payload===4 && !(state.assignedMembers.some((element) => element.id=== state.selectedTeamMember.id)) )?state.desk4.push(state.selectedTeamMember):null);
        
        state.assignedMembers.push(state.selectedTeamMember);
        state.AllTeamMembers=filterTeam();
    },
    deleteAppointment:(state,action) =>{
        state.AllTeamMembers.push(action.payload);
        let newList=state.assignedMembers.filter(element=>element.id!==action.payload.id)
        state.assignedMembers=newList;

        const newDesk1 = state.desk1.filter(element=>element.id!==action.payload.id);
        const newDesk2 = state.desk2.filter(element=>element.id!==action.payload.id);
        const newDesk3 = state.desk3.filter(element=>element.id!==action.payload.id);
        const newDesk4 = state.desk4.filter(element=>element.id!==action.payload.id);

        state.desk1=newDesk1;
        state.desk2=newDesk2;
        state.desk3=newDesk3;
        state.desk4=newDesk4;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTeamMembers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.AllTeamMembers=action.payload;
    }),
      builder.addCase(fetchAllTeamMembers.rejected, (state, action) => {
        state.isLoading = false;
        state.AllTeamMembers = [];
      }),
      builder.addCase(fetchAllTeamMembers.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const { memberDetailHandler,deskHandler,deleteAppointment } = TeamMemberSlice.actions;
export default TeamMemberSlice.reducer;
