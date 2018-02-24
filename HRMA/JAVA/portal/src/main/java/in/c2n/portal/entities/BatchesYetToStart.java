package in.c2n.portal.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "batches_yet_to_start")
public class BatchesYetToStart implements java.io.Serializable {

	private static final long serialVersionUID = -7099508020221476712L;

	private int batchId;
	private String batch;

	@Id
	@Column(name = "batch_id", nullable = false)
	public int getBatchId() {
		return this.batchId;
	}

	public void setBatchId(int batchId) {
		this.batchId = batchId;
	}

	@Column(name = "batch", length = 277)
	public String getBatch() {
		return this.batch;
	}

	public void setBatch(String batch) {
		this.batch = batch;
	}

}
