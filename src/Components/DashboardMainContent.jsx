import React from 'react'
//import { Link } from 'react-router-dom'
import { Modal, Button } from 'flowbite-react'


const DashboardMainContent = ({posts, editedPost, EditModalOpen, setEditModalOpen, setEditedPost, handleEdit}) => {
  return (
      <div className='flex-grow p-4'>
          <h1 className='text-2xl font-bold mb-4 text-black'>Dashboard</h1>

          {/** conttent */}

          <Modal isOpen={EditModalOpen} onClose={() => {
              setEditModalOpen(false)
              setEditedPost({ id: null, content: ''})
          }}>
              <Modal.Header>Edit Post</Modal.Header>
              <Modal.Body>
                  <textarea
                      value={editedPost.content}
                      onChange={(e) => setEditedPost({ ...editedPost, content: e.target.value })}
                      className='w-full p-2 border rounded'
                      rows={6}
                   />
              </Modal.Body>
              <Modal.Footer>
                  <Button
                      onClick={() => {
                          setEditModalOpen(false)
                          setEditedPost({ id: null, content: '' })
                      }}
                      className='mr-2 bg-red-200 px-4 py-3 text-white'
                  >
                      Cancel
                  </Button>
                  <Button
                      onClick={handleEdit}
                      className=' bg-green-400 hover:bg-green-500 px-4 py-3'
                  >
                      Save Changes
                  </Button>
              </Modal.Footer>
          </Modal>
      </div>
  )
}

export default DashboardMainContent
