<?php

use Phinx\Migration\AbstractMigration;

class ValeHerram extends AbstractMigration
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-abstractmigration-class
     *
     * The following commands can be used in this method and Phinx will
     * automatically reverse them when rolling back:
     *
     *    createTable
     *    renameTable
     *    addColumn
     *    renameColumn
     *    addIndex
     *    addForeignKey
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function change()
    {
        $vale = $this->table('vale_herram');
        $vale->addColumn('empleado_id', 'integer')
            ->addColumn('folio', 'integer')
            ->addColumn('active', 'boolean')
            ->addColumn('date_entered', 'timestamp')
            ->addColumn('created_at', 'timestamp')
            ->addColumn('updated_at', 'timestamp', array('null'=> true, 'default' => null))
            ->addIndex('id')
            ->addIndex('empleado_id')
            ->addIndex('folio')
            ->create();

        $vale_items = $this->table('vale_herram_items');
        $vale_items->addColumn('vale_herram_id', 'integer')
            ->addColumn('codigo', 'string', array('limit' =>  100, 'null' => true))
            ->addColumn('descripcion', 'string', array('limit' =>  255))
            ->addColumn('cantidad', 'decimal', array('precision' => 10, 'scale' => 2))
            ->addColumn('created_at', 'timestamp')
            ->addColumn('updated_at', 'timestamp', array('null'    => true,'default' => null))
            ->addIndex('id')
            ->addIndex('vale_herram_id')
            ->create();
    }
}
