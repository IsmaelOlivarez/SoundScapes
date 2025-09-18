import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '../supabaseClient'
import { Unit, CreateUnit, UpdateUnit } from '../schemas'

export const useUnits = () => {
  return useQuery({
    queryKey: ['units'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('units')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return data as Unit[]
    },
  })
}

export const useUnit = (id: string) => {
  return useQuery({
    queryKey: ['units', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('units')
        .select('*')
        .eq('id', id)
        .single()
      
      if (error) throw error
      return data as Unit
    },
    enabled: !!id,
  })
}

export const useCreateUnit = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (unit: CreateUnit) => {
      const { data, error } = await supabase
        .from('units')
        .insert(unit)
        .select()
        .single()
      
      if (error) throw error
      return data as Unit
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['units'] })
    },
  })
}

export const useUpdateUnit = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async ({ id, ...updates }: UpdateUnit & { id: string }) => {
      const { data, error } = await supabase
        .from('units')
        .update(updates)
        .eq('id', id)
        .select()
        .single()
      
      if (error) throw error
      return data as Unit
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['units'] })
      queryClient.invalidateQueries({ queryKey: ['units', data.id] })
    },
  })
}

export const useDeleteUnit = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('units')
        .delete()
        .eq('id', id)
      
      if (error) throw error
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['units'] })
    },
  })
}
