const {Router} = require('express')
const router = Router()

const {renderNoteForm, 
        createNewNote, 
        renderNote, 
        renderEditForm,
        updateNote, 
        deletenote
    } = require('../controllers/notes.controllres');

//notas
router.get('/notes/add', renderNoteForm);

router.post('/notes/new-note', createNewNote);

// obtener notas 

router.get('/notes',renderNote);

// editar notas 

router.get('/notes/edit/:id', renderEditForm);

router.put('/notes/edit/:id', updateNote);

// borrar notas 

router.delete('/notes/delete/:id', deletenote);

module.exports = router