'use client'

import axios from 'axios'

const baseURL = 'https://desolate-forest-43262-ac0e0645cc68.herokuapp.com/'

export const api = axios.create({
  baseURL: baseURL
})
